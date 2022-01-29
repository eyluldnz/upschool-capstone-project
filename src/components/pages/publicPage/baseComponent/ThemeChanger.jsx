import React, { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

export default function ThemeChanger() {
    const { themeName, setThemeName } = useContext(ThemeContext);
    return <div>
        {
            themeName==='light' ? <Brightness2Icon onClick={()=> setThemeName((themeName==='dark'?'light':'dark'))}/> : <WbSunnyIcon onClick={()=> setThemeName((themeName==='dark'?'light':'dark'))} />
        }
    </div>;
}
