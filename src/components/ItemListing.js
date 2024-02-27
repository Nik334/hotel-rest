import RadioButton from "./radioButton";
import {useState} from "react";

const ItemListing = ({itemName, itemList}) => {

    const [subItem, setSubItem] = useState([]);

    const onRadioButtonChange = (e) => {
        const value = e.target.value;
        const item = itemList.filter(item => item.label === value)[0]
        setSubItem(item.types)
    }

    return (<>
        {itemList?.map(pr => <>
            <RadioButton
                itemName={itemName}
                item={pr}
                onRadioButtonChange={onRadioButtonChange}
            />
        </>)}
        {subItem && subItem?.items?.map(sub => <>
            <RadioButton
                itemName={subItem.name}
                item={sub}
            />
        </>)}

    </>)
}

export default ItemListing;