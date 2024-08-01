import { Dropdown } from "react-native-element-dropdown";
import { stylesheet } from "../stylesheet";
import DisplayHandler from "./DisplayHandler";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
export default function SearchBox(props) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    return (
        <>
        <Dropdown
            style={[stylesheet.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={{color:"#FF4191"}}
            selectedTextStyle={{...stylesheet.textHighlight}}
            inputSearchStyle={{...stylesheet.textInput}}
            iconStyle={{...stylesheet.icon}}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                setIsFocus(false);
            }}
            autoScroll
            closeModalWhenSelectedItem={true}
            renderLeftIcon={() => (
                <AntDesign
                    style={{...stylesheet.icon}}
                    color={isFocus ? 'blue' : 'black'}
                    name="check"
                    size={20}
                />
            )}
            />{
                props.showFilter && (
                    <DisplayHandler 
                        style={{position:"absolute",top:50,left:0}} 
                        isList={props.isList} 
                        setIsList={props.setIsList}
                        isAlphabeticallyAsc={props.isAlphabeticallyAsc} 
                        isNumericallyAsc={props.isNumericallyAsc}
                        setIsAlphabeticallyAsc={props.setIsAlphabeticallyAsc}
                        setIsNumericallyAsc={props.setIsNumericallyAsc}
                    />
                )
            }
        </>
    )
}
