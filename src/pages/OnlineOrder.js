import {useEffect, useState} from "react";
import api from '../services/api.json'
import ItemListing from "../components/ItemListing";

const OnlineOrder = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        console.log("use effect")
        setMenu(api);
    }, [menu]);

    return (
        <div className={"container"}>
            {/*{JSON.stringify(menu)}*/}
            <br/>
            <br/>
            <br/>
            <br/>
            <h3>Main Dishes</h3>
            {
                menu.map((item, index) => <>
                    <ItemListing
                        itemName={item.name}
                        itemList={item?.pricing}
                    />
                </>)
            }
        </div>
    )

}

export default OnlineOrder;