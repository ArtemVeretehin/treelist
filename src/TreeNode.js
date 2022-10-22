import React, { useState } from "react";
import Tree from './Tree'
import "./List_Style.css"
import PlusIcon from './images/LiPlusIcon.jpg'
import MinusIcon from './images/LiMinusIcon.jpg'
import DotIcon from './images/LiDot.jpg'

const TreeNode = ({ node, getKey, rootKey }) => {

    //Хук, хранящий состояние видимости дочернего узла(скрыт/отображен)
    const [childVisible, setChildVisiblity] = useState(false);

    //Признак наличия дочерних узлов у данного узла
    const hasChild = (node.children) ? true : false;

    //Функция, отвечающая за выделения/снятие выделения у узла
    const ItemClick = () => {
        if (node.key !== rootKey) getKey(node.key)
        else getKey("")
    }

    //Функция, изменяющая видимость дочернего узла
    const ListOpen = (e) => {
        setChildVisiblity((v) => !v)
        e.stopPropagation()
    }

    //Формирование узла. В случае наличия дочерних узлов также рекурсивно формируется дерево дочерних узлов.
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
