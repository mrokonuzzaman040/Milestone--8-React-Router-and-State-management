import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    
    return (
        <div>
            <p className='text-2xl flex'><AiFillCheckCircle className="text-green-500 items-center mr-3 "></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;