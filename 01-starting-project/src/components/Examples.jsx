import { EXAMPLES } from "../data";
import {useState} from 'react';
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){
  const [selectedTopic, setSelectedTopic]= useState();
  let tabContent = 'Please click a button';
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
        <Tabs 
        // ButtonsContainer = "menu"
        buttons={
          <>
             <TabButton isSelected={selectedTopic === 'components'} 
             onClick ={() => handleClick('components')}>Components</TabButton>
             <TabButton isSelected={selectedTopic === 'jsx'} 
             onClick ={() => handleClick('jsx')}>JSX</TabButton>
             <TabButton isSelected={selectedTopic === 'props'} 
             onClick ={() => handleClick('props')}>Props</TabButton>
             <TabButton isSelected={selectedTopic === 'state'} 
             onClick ={() => handleClick('state')}>State</TabButton>
          </>
        }>
        {!selectedTopic && <p>Please Select A Topic</p> }
            {selectedTopic ? <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div> : null}
          </Tabs> 
        </Section>
  );
}