import React from 'react'
import DisplayPrefix from './DisplayPrefix'
import DisplayName from './DisplayName'
import WhatReactCanDisplay from './WhatReactCanDisplay'
import DisplayPassedName from './DisplayPassedName'
import DisplayFirstAndLastName  from './DisplayFirstAndLastName'


const App = () => (
  <div>
    <h1>Hello</h1>

    <DisplayPrefix />
    <DisplayName />
    <WhatReactCanDisplay />

    <DisplayPassedName 
        name = {'Marysia'}
    />

    <DisplayFirstAndLastName 
        firstName = {'Marysia'}
        lastName = {'Micek'}
    />
  </div>
)

export default App;
