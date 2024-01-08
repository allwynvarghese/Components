import classNames from "classnames";

function Button({children, primary, secondary, success, warning, danger, plain, rounded, outline, ...rest}){

    const checkProps = [primary, secondary, success, warning, danger, plain].filter(variations => variations);

    if(checkProps.length > 1) return console.error('More than one variation values are true.');

    const classes = classNames(rest.className, 'flex items-center px-8 py-3 border', {
        'border-blue-500 bg-blue-600 text-blue-500': primary,
        'border-gray-500 bg-gray-600 text-gray-500': secondary,
        'border-green-500 bg-green-600 text-green-500': success,
        'border-yellow-500 bg-yellow-600 text-yellow-500': warning,
        'border-red-500 bg-red-600 text-red-500': danger,
        'border-gray-500 bg-white-500 text-gray-500': plain,
        'rounded-full': rounded,
        'bg-white': outline,
        ...rest
    })

    return (
        <button {...rest} className={classes}>{children}</button>
    )
}

export default Button;