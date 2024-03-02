import RadioButton from "./radioButton";
import {useState} from "react";

const ItemListing = ({itemName, itemList}) => {

    const [types, setTypes] = useState([]);
    const [otherItems, setOtherItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    const onItemSelect = (e) => {
        const value = e.target.value;
        const item = itemList.filter(item => item.label === value)[0];
        setTypes(item?.types);
        setOtherItems(item?.otherItems);
        setSelectedItem(value);
    }

    const handleClearSelection = () => {
        console.log("handleClearSelection")
    }

    const onSubItemSelect = () => {

    }

    return (<div className={"container"}>
        <h5>{itemName}</h5>
        <div className={"row"}>
            {itemList && itemList?.map(pr => <RadioButton
                itemName={itemName}
                item={pr}
                selectedItem={selectedItem}
                onRadioButtonChange={onItemSelect}
            />)}
        </div>
        <div className={"row"}>
            {types && (<>
                <h6>{types?.name}</h6>
                {types?.items && types?.items?.map(sub => <RadioButton
                    itemName={types?.name}
                    item={sub}
                />)}
            </>)}
            {otherItems.length !== 0 && (<>
                <h6>{otherItems?.name}</h6>
                {otherItems?.items && otherItems?.items?.map(sub => <RadioButton
                    itemName={types?.name}
                    item={sub}
                    onRadioButtonChange={onSubItemSelect}
                />)}
                <button className="col-4" onClick={handleClearSelection}>Clear Selection</button>
            </>)}
        </div>

    </div>)
}

export default ItemListing;