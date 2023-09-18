const Link = ({ route }) => {
    return (
        <li className='mr-4' key={route.id}><a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;