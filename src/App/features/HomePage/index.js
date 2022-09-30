import Header from './Header';
import ListTile from './ListTile';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { skills, skillsToLearn } from './skills';

const HomePage = () => {
    return (
        <>
            <Header />
            <ListTile title="My skillset includes" items={skills} />
            <ListTile title="What I want to learn next 🚀" items={skillsToLearn} />
            <Portfolio />
            <Contact />
        </>
    );
};

export default HomePage;