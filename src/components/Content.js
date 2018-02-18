import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../screens/About';
import Anchor from '../screens/Anchor';
import Box from '../screens/Box';
import Button from '../screens/Button';
import Calendar from '../screens/Calendar';
import Chart from '../screens/Chart';
import CheckBox from '../screens/CheckBox';
import Clock from '../screens/Clock';
import Color from '../screens/Color';
import Components from '../screens/Components';
import Contribute from '../screens/Contribute';
import Diagram from '../screens/Diagram';
import Distribution from '../screens/Distribution';
import Drop from '../screens/Drop';
import DropButton from '../screens/DropButton';
import Examples from '../screens/Examples';
import Feed from '../screens/Feed';
import Form from '../screens/Form';
import Grid from '../screens/Grid';
import Heading from '../screens/Heading';
import Home from '../screens/Home';
import Image from '../screens/Image';
import Keyboard from '../screens/Keyboard';
import Layer from '../screens/Layer';
import License from '../screens/License';
import Markdown from '../screens/Markdown';
import Menu from '../screens/Menu';
import Meter from '../screens/Meter';
import Paragraph from '../screens/Paragraph';
import PhotoBrowser from '../screens/PhotoBrowser';
import RadioButton from '../screens/RadioButton';
import RangeInput from '../screens/RangeInput';
import Responsive from '../screens/Responsive';
import Select from '../screens/Select';
import SkipLinks from '../screens/SkipLinks';
import Stack from '../screens/Stack';
import Start from '../screens/Start';
import Tabs from '../screens/Tabs';
import Table from '../screens/Table';
import Text from '../screens/Text';
import TextArea from '../screens/TextArea';
import TextInput from '../screens/TextInput';
import Theme from '../screens/Theme';
import Video from '../screens/Video';
import WorldMap from '../screens/WorldMap';

export default () => (
  <Switch>
    <Route exact={true} path='/' component={Home} />

    <Route exact={true} path='/examples' component={Examples} />
    <Route exact={true} path='/start' component={Start} />
    <Route exact={true} path='/components' component={Components} />
    <Route exact={true} path='/feed' component={Feed} />

    <Route exact={true} path='/about' component={About} />
    <Route exact={true} path='/contribute' component={Contribute} />
    <Route exact={true} path='/license' component={License} />

    <Route exact={true} path='/anchor' component={Anchor} />
    <Route exact={true} path='/box' component={Box} />
    <Route exact={true} path='/button' component={Button} />
    <Route exact={true} path='/calendar' component={Calendar} />
    <Route exact={true} path='/chart' component={Chart} />
    <Route exact={true} path='/checkbox' component={CheckBox} />
    <Route exact={true} path='/clock' component={Clock} />
    <Route exact={true} path='/color' component={Color} />
    <Route exact={true} path='/diagram' component={Diagram} />
    <Route exact={true} path='/distribution' component={Distribution} />
    <Route exact={true} path='/drop' component={Drop} />
    <Route exact={true} path='/dropbutton' component={DropButton} />
    <Route exact={true} path='/form' component={Form} />
    <Route exact={true} path='/grid' component={Grid} />
    <Route exact={true} path='/heading' component={Heading} />
    <Route exact={true} path='/image' component={Image} />
    <Route exact={true} path='/keyboard' component={Keyboard} />
    <Route exact={true} path='/layer' component={Layer} />
    <Route exact={true} path='/markdown' component={Markdown} />
    <Route exact={true} path='/menu' component={Menu} />
    <Route exact={true} path='/meter' component={Meter} />
    <Route exact={true} path='/radiobutton' component={RadioButton} />
    <Route exact={true} path='/rangeinput' component={RangeInput} />
    <Route exact={true} path='/responsive' component={Responsive} />
    <Route exact={true} path='/paragraph' component={Paragraph} />
    <Route exact={true} path='/select' component={Select} />
    <Route exact={true} path='/photo-browser' component={PhotoBrowser} />
    <Route exact={true} path='/skiplinks' component={SkipLinks} />
    <Route exact={true} path='/stack' component={Stack} />
    <Route exact={true} path='/table' component={Table} />
    <Route exact={true} path='/tabs' component={Tabs} />
    <Route exact={true} path='/text' component={Text} />
    <Route exact={true} path='/textarea' component={TextArea} />
    <Route exact={true} path='/textinput' component={TextInput} />
    <Route exact={true} path='/theme' component={Theme} />
    <Route exact={true} path='/video' component={Video} />
    <Route exact={true} path='/worldmap' component={WorldMap} />
  </Switch>
);
