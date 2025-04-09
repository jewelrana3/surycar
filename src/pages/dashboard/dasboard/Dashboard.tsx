import Card from './Card';
import Chart from './Chart';
import Post from './Post';

import User from './User';
// import EventStates from './EventStates';

export default function Dashboard() {
    return (
        <div className="">
            <div className="col-span-4">
                <Card />
            </div>
            <div className="col-span-8">
                <Chart />
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="bg-white shadow-md rounded-lg p-2">
                    <User />
                </div>
                <div className="bg-white shadow-md rounded-lg p-2">
                    <Post />
                </div>
            </div>
        </div>
    );
}
