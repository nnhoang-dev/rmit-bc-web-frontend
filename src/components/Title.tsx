const Title = (props: { title: string; }) => {
    return (
        <h2 className=' text-primary font-extrabold border-b-4 border-black px-5 pb-3 
            text-2xl sm:text-4xl'>{props.title}</h2>
    );
};

export default Title;