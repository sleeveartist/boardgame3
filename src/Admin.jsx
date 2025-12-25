import Timer from './Timer';
import GetCategories from './Categories';

const Admin = () => {
    return (
        <div>
            <Timer initialSeconds={30}/>
            <Timer initialSeconds={60} />
            <Timer initialSeconds={180} />
            <GetCategories />
        </div>
    );
};

export default Admin;