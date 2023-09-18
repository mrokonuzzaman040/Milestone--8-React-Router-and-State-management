import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className="bg-blue-500 rounded-md p-4  text-white">
            <div className="text-white p-4 flex flex-col">
                <h2 className='text-center'>
                    <span className='text-7xl font-extrabold'>{price}</span>
                    <span className='text-2xl'>/mon</span>
                </h2>
                <h4 className='text-3xl text-center my-8'>{name}</h4>
                <div className="pl-6 flex-grow">
                    {
                        features.map(feature => <Feature key={feature} feature={feature}></Feature>)
                    }
                </div>
                <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-2xl text-center items-center hover:animate-pulse'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;