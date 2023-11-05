import './costitem.css'

function CostItem(props) {

    // const costData = new Date(2023, 2, 12);
    // const costDescription = 'Ref';
    // const costAmount = 999.99;

    return (
        <div className='cost-item'>
            <div>{props.data}</div>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default CostItem;