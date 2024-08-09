import { useEffect, useState } from 'react'
import { getTopics } from '../api'

const TopicDropdown = ({ onTopicChange }) => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((response) => {
            setTopics(response.topics);
        });
    }, []);

    const handleTopic = (event) => {
        const selectedTopic = event.target.value;
        onTopicChange(selectedTopic);
    };

return (
    <>
        <select name='topic-dropdown' id='topic-dropdown' onChange={ handleTopic }>
            <option value=''>all topics</option>
            { topics.map((topic) => {

                return <option key={ topic.slug } value={ topic.slug }>
                    { topic.slug }</option>
                }) }
        </select>
    </>
);
};

export default TopicDropdown