export const Warrior = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'React Warrior!' 
            + new moment().format("YYYY-MM-DD")
        )
    );
};