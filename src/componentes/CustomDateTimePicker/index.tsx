import React, { useState } from "react";
import  DateTimePicker from "@react-native-community/datetimepicker";
import { Modal, Platform, View } from "react-native";
 
const CustomDateTimePicker = ({ type, onDatechange, show, setShow }) => {
 const [date, setDate] = useState(new Date());
 
 const onChange = (event, selectedDate) => {
 const currentDate = selectedDate || new Date();
 setDate(currentDate);
 setShow(false)
 }
 
 
    return (
    <Modal
    transparent={true}
    visible={show}
    onRequestClose={() => setShow(false)}
    >
    <View style={style.modalOverlay}>
    <View style={style.container}>
        <DateTimePicker
            mode={type}
            value={date}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
        />
    </View>
    </View>
    </Modal>
    )
   
    }
 
    export default CustomDateTimePicker;