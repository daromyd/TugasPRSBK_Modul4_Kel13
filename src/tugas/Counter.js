import React, { useState , useMemo , useEffect , useReducer , useContext} from "react";
import "./Counter.css";

const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		default:
			return state
	}
}

const themes = {
    light: {
        id: 1,
        foreground:"#000000",
        background:"#eeeeee",
    },
    dark: {
        id: 2,
        foreground:"#ffffff",
        background:"#222222",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function Counter() {
    const [number, setNumber] = useState(0)
	const [count, dispatch] = useReducer(reducer, 0)
	const [theme, setTheme] = useState(themes.dark)

    const changeTheme = () => {
        if (theme.id === themes.light.id) {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    };

    const numberUp = () => {
        setNumber (number + 1);
    };
    const numberDown = () => {
        setNumber (number - 1);
    };

    const isNumberEven = useMemo(() => {
        let i = 0;
        while(i < 500000000)i++
        return number % 2 === 0
      },[number])

    const isNumberEven2 = useMemo(() => {
        return count % 2 === 0
    },[count])

    useEffect(() => {
        if (number != 0) {
            alert(`ngelag gan`);
        }
    }, [number]);


    return (
        <ThemeContext.Provider value={{theme, changeTheme }}>
        <div className="Main" style={{ background: theme.background, color: theme.foreground }}>
            <p className="Text">Kelompok 13</p>
            <ThemedButton />
            <p className="Text">Counter dengan perulangan</p>
            <p >{number} merupakan bilangan {isNumberEven ? "genap" : "ganjil"}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" style={{ background: theme.background, color: theme.foreground }} onClick={numberUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" style={{ background: theme.background, color: theme.foreground }} onClick={numberDown}>
                        Down
                    </button>
                </div>
            </div>

            <p className="Text">Counter tanpa perulangan</p>
            <p >{count} merupakan bilangan {isNumberEven2 ? "genap" : "ganjil"}</p>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" style={{ background: theme.background, color: theme.foreground }} onClick={() => dispatch('increment')}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" style={{ background: theme.background, color: theme.foreground }} onClick={() => dispatch('decrement')}>
                        Down
                    </button>
                </div>
            </div>
        </div>
        </ThemeContext.Provider>
    );
}


function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return(
        <button
            className="ViewButton"
            style={{ background: theme.background, color: theme.foreground }}
            onClick={changeTheme}
        >
            Change Theme!!!
        </button>
    );
}