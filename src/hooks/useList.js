import { useState } from 'react';

function useList(list){
    const [selectedIndex, setSelectedIndex] = useState(0)
    const getItemNext = () => {
        if (selectedIndex == list.length - 1)
            setSelectedIndex(0)
        else setSelectedIndex(selectedIndex+1)
    }

    const getItemPrevious = () => {
        if (selectedIndex == 0)
            setSelectedIndex(list.length - 1)
        else setSelectedIndex(selectedIndex -1)
    }

    return [selectedIndex, getItemNext, getItemPrevious]
}

export default useList;