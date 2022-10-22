import React, { useState } from "react";
import Tree from './Tree'
import "./List_Style.css"
import PlusIcon from './images/LiPlusIcon.jpg'
import MinusIcon from './images/LiMinusIcon.jpg'
import DotIcon from './images/LiDot.jpg'

const TreeNode = ({ node, getKey, rootKey }) => {

    const [childVisible, setChildVisiblity] = useState(false);

    const hasChild = (node.children) ? true : false;

    const ItemClick = () => {
        if (node.key !== rootKey) getKey(node.key)
        else getKey("")
    }

    const ListOpen = (e) => {
        setChildVisiblity((v) => !v)
        e.stopPropagation()
    }

    return (
        <li>
            <div className={`div_in_li ${node.key === rootKey ? "Element_Selected" : "Element_Unselected"}`} onClick={ItemClick}>
                <div>
                    {hasChild && !childVisible && (<img src={PlusIcon}
                        width="10" height="10" onClick={(e) => ListOpen(e)} />)}

                    {hasChild && childVisible && (<img src={MinusIcon}
                        width="10" height="10" onClick={(e) => ListOpen(e)} />)}

                    {!hasChild && (<img src={DotIcon}
                        width="10" height="10" />)}

                    {node.label}
                </div>
            </div>

            {hasChild && childVisible && (
            <ul>
                <Tree data={node.children} getKey={getKey} rootKey={rootKey} />
            </ul>
            )}
        </li>
    );
};

export default TreeNode;
