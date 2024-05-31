export const SideBar: React.FC = () => {

    const array = ["apple", "banna", "pear"];

    return (
        <div className='side-bar' style={{ width: '225px', height: '100vh', backgroundColor: 'gray' }}>
            <div className='side-bar-containts' style={{ padding: '15px', textAlign: 'center', color: 'white' }}>
                <p>ToDo</p>
            </div>
            {array.map((item) => {
                return <div className='side-bar-containts' style={{ padding: '15px', textAlign: 'center', color: 'white' }}>
                    <p>{item}</p>
                </div>
            })}
        </div>
    );
};