import React, { useState } from "react";
import Tree from './Tree'
import Popup from './Popup'
import "./List_Style.css"


const TreeList = () => {

    const treeData = [
        {
            key: "0",
            label: "Documents",
            icon: "fa fa-folder",
        },
    ];

    const initialTree = [
        {
            key: "0",
            label: "Documents",
            icon: "fa fa-folder",
        },
    ];

    const [listElements, setlistElements] = useState(treeData)
    const [popupDisplay, setPopupDisplay] = useState(false)
    const [rootKey, setRootKey] = useState(0);


    const EditValue = (NewValue) => {
        if (NewValue === "") {
            alert("Введите новое значение узла!")
            return false
        }
        EditItemNested(listElements, rootKey, "children", NewValue)
        return true
    }


    const EditItemNested = (arr, itemKey, nestingKey, newValue) => (
        arr.reduce((a, item) => {
            if (a) return arr;

            if (item.key == itemKey) {
                item.label = newValue
                if (arr[0].key === "0") setlistElements([...arr])

                return item;
            }

            if (item[nestingKey]) {
                let result = EditItemNested(item[nestingKey], itemKey, nestingKey, newValue)
                if (arr[0].key === "0") setlistElements([...arr])

                return result
            }
        }, null)
    );

    const DeleteItemNested = (arr, itemId, nestingKey) => (
        arr.reduce((a, item) => {
            
            if (a) return arr;

            if (item.key == itemId) {
                if (arr[0].key === "0") {
                    alert("Корневой узел нельзя удалить!")
                    return item;
                }

                for (let i = arr.length - 1; i > arr.indexOf(item); i--) {
                    arr[i].key = arr[i - 1].key
                }

                arr.splice(arr.indexOf(item), 1)

                return item;

            }

            if (item[nestingKey]) {
                let result = DeleteItemNested(item[nestingKey], itemId, nestingKey)
                if (item.children.length === 0) delete item.children
                if (arr[0].key === "0") setlistElements([...arr])

                return result
            }
        }, null)
    );

    const AddItemNested = (arr, itemId, nestingKey) => (
        arr.reduce((a, item) => {
            
            if (a) return arr;

            if (item.key == itemId) {
                if (!item.children || item.children.length === 0) {
                    let key = item.key.concat("-0")
                    let newItem =
                    {
                        key: key,
                        label: `Node`,
                        icon: "fa fa-file",
                    }

                    item.children = [newItem]

                    if (arr[0].key === "0") setlistElements([...arr])
                }
                else {
                    let key = item.key.concat("-").concat(String(Number(item.children[item.children.length - 1].key.slice(-1)) + 1))
                    let newItem =
                    {
                        key: key,
                        label: `Node`,
                        icon: "fa fa-file",
                    }

                    item.children.push(newItem)
                    if (arr[0].key === "0") setlistElements([...arr])
                }
                return item;
            }

            if (item[nestingKey]) {
                let result = AddItemNested(item[nestingKey], itemId, nestingKey)
                if (arr[0].key === "0") setlistElements([...arr])

                return result
            }
        }, null)
    );

    const getKey = (key) => setRootKey(key)


    return (
        <React.Fragment>
            <div style={{ border: "solid", borderColor: "#579457", width: "100vw", padding: "15px", backgroundColor: "whitesmoke" }}>
                <h2>Tree</h2>
                <Tree data={listElements} getKey={getKey} rootKey={rootKey} />
                
                <div style={{ textAlign: "center" }}>
                    <h2>Control</h2>
                    <button className="Control_buttons" onClick={() => AddItemNested(listElements, rootKey, "children")}>Add</button>
                    <button className="Control_buttons" onClick={() => setPopupDisplay(true)}>Edit</button>
                    <button className="Control_buttons" onClick={() => DeleteItemNested(listElements, rootKey, "children")}>Delete</button>
                    <button className="Control_buttons" onClick={() => setlistElements(initialTree)}>Reset</button>
                    <Popup display={popupDisplay} setDisplay={setPopupDisplay} EditValue={EditValue} />
                </div>
            </div>
        </React.Fragment>
    );
};


export default TreeList;