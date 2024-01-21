import classNames from 'classnames';

function Panel({children, className, ...rest}){

    const finalClasses = classNames('p-3 border bg-white w-48 rounded shadow', className);

    return(
        <div className={finalClasses} {...rest}>
            {children}
        </div>
    )

}

export default Panel;
