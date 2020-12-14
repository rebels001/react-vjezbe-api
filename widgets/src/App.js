import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from "./components/Header"

const items = [
	{
		title: 'What is react',
		content: 'React is a front end javacstip framework'
	},
	{
		title: 'Why use React',
		content: 'Reat is a facvorite JS library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating componenets'
	}
];

const options = [
	{
		label: 'The color red',
		value: 'red'
	},
	{
		label: 'The color Green',
		value: 'green'
	},
	{
		label: 'A shade of blue',
		value: 'blue'
	}
];

export default () => {
    const [selected, setSelected] = useState(options[0])

	return (
		<div>
            <Header />
            <div className="ui container">
                <Route path="/">
                    <Accordion items={items}/>
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown 
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
            </div>
		</div>
	);
};
