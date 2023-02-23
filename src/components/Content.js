import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { Box, Text } from 'grommet';
import { Route, Routes } from '../Router';

import Accordion from '../screens/Accordion';
import About from '../screens/About';
import Anchor from '../screens/Anchor';
import Avatar from '../screens/Avatar';
import AnnounceContext from '../screens/AnnounceContext';
import Background from '../screens/Background';
import Box from '../screens/Box';
import Button from '../screens/Button';
import Calendar from '../screens/Calendar';
import Card from '../screens/Card';
import Cards from '../screens/Cards';
import Carousel from '../screens/Carousel';
import Chart from '../screens/Chart';
import CheckBox from '../screens/CheckBox';
import CheckBoxGroup from '../screens/CheckBoxGroup';
import Clock from '../screens/Clock';
import Collapsible from '../screens/Collapsible';
import Color from '../screens/Color';
import Components from '../screens/Components';
import Data from '../screens/Data';
import DataChart from '../screens/DataChart';
import DataFilter from '../screens/DataFilter';
import DataFilters from '../screens/DataFilters';
import DataSearch from '../screens/DataSearch';
import DataSort from '../screens/DataSort';
import DataSummary from '../screens/DataSummary';
import DataTable from '../screens/DataTable';
import DataTableColumns from '../screens/DataTableColumns';
import DataView from '../screens/DataView';
import DateInput from '../screens/DateInput';
import Diagram from '../screens/Diagram';
import Distribution from '../screens/Distribution';
import Docs from '../screens/Docs';
import Drop from '../screens/Drop';
import DropButton from '../screens/DropButton';
import FileInput from '../screens/FileInput';
import Footer from '../screens/Footer';
import Form from '../screens/Form';
import FormField from '../screens/FormField';
import Grid from '../screens/Grid';
import Grommet from '../screens/Grommet';
import Header from '../screens/Header';
import Heading from '../screens/Heading';
import Home from '../screens/Home';
import Image from '../screens/Image';
import InfiniteScroll from '../screens/InfiniteScroll';
import Keyboard from '../screens/Keyboard';
import Layer from '../screens/Layer';
import List from '../screens/List';
import Main from '../screens/Main';
import Markdown from '../screens/Markdown';
import MaskedInput from '../screens/MaskedInput';
import Menu from '../screens/Menu';
import Meter from '../screens/Meter';
import NameValueList from '../screens/NameValueList';
import Nav from '../screens/Nav';
import Notification from '../screens/Notification';
import Page from '../screens/Page';
import PageHeader from '../screens/PageHeader';
import Pagination from '../screens/Pagination';
import Paragraph from '../screens/Paragraph';
import RadioButton from '../screens/RadioButton';
import RadioButtonGroup from '../screens/RadioButtonGroup';
import RangeInput from '../screens/RangeInput';
import RangeSelector from '../screens/RangeSelector';
import ResponsiveContext from '../screens/ResponsiveContext';
import Select from '../screens/Select';
import SelectMultiple from '../screens/SelectMultiple';
import SkipLinks from '../screens/SkipLinks';
import Sidebar from '../screens/Sidebar';
import Skeleton from '../screens/Skeleton';
import Spinner from '../screens/Spinner';
import Stack from '../screens/Stack';
import StarRatingPage from '../screens/StarRating';
import Tabs from '../screens/Tabs';
import Table from '../screens/Table';
import Tag from '../screens/Tag';
import Text from '../screens/Text';
import TextArea from '../screens/TextArea';
import TextInput from '../screens/TextInput';
import ThemeContext from '../screens/ThemeContext';
import ThumbsRatingPage from '../screens/ThumbsRating';
import Tip from '../screens/Tip';
import Use from '../screens/Use';
import Video from '../screens/Video';
import WorldMap from '../screens/WorldMap';

import Browsers from '../screens/Docs/Browsers';
import Functions from '../screens/Docs/Functions';
import GettingStarted from '../screens/Docs/GettingStarted';
import GlobalTheme from '../screens/Docs/GlobalTheme';
import Resources from '../screens/Docs/Resources';
import StableBranch from '../screens/Docs/Stable';

// NOTE: This commented out code illustrates how to code-split per-screen
// class DynamicImport extends Component {
//   state = {
//     component: null,
//   }
//
//   componentDidMount() {
//     this.props.load()
//       .then((component) => {
//         this.setState(() => ({
//           component: component.default ? component.default : component,
//         }));
//       });
//   }
//
//   render() {
//     return this.props.children(this.state.component);
//   }
// }
//
// const Screens = {};
//
// ['About', 'Anchor', 'Box', 'Button', 'Calendar', 'Carousel', 'Chart',
//   'CheckBox', 'Clock', 'Color', 'Components', 'Diagram', 'Distribution',
//   'Drop', 'DropButton', 'Form', 'FormField', 'Grid', 'Grommet',
//   'Heading', 'Home', 'Image', 'InfiniteScroll', 'Keyboard', 'Layer',
//   'Markdown', 'Menu', 'Meter', 'Paragraph', 'RadioButton',
//   'RangeInput', 'RangeSelector', 'Responsive', 'Select', 'SkipLinks', 'Stack',
//   'Tabs', 'Table', 'Tag', 'Text', 'TextArea', 'TextInput', 'Use',
//   'Video', 'WorldMap'].forEach((name) => {
//   Screens[name] = props => (
//     <DynamicImport load={() => import(`../screens/${name}`)}>
//       {C => ((C === null)
//         ? (
//           <Box pad='xlarge' justify='center' align='center'>
//             <Text color='light-5'>...</Text>
//           </Box>
//           )
//         : <C {...props} />)}
//     </DynamicImport>
//   );
// });

const Content = () => (
  <Routes notFoundRedirect="/">
    <Route exact path="/" component={Home} />

    <Route exact path="/start" component={Use} />
    <Route exact path="/use" component={Use} />
    <Route exact path="/components" component={Components} />
    <Route exact path="/docs" component={Docs} />

    <Route exact path="/about" component={About} />

    <Route exact path="/accordion" component={Accordion} />
    <Route exact path="/anchor" component={Anchor} />
    <Route exact path="/avatar" component={Avatar} />
    <Route exact path="/announcecontext" component={AnnounceContext} />
    <Route exact path="/background" component={Background} />
    <Route exact path="/box" component={Box} />
    <Route exact path="/button" component={Button} />
    <Route exact path="/calendar" component={Calendar} />
    <Route exact path="/card" component={Card} />
    <Route exact path="/cards" component={Cards} />
    <Route exact path="/carousel" component={Carousel} />
    <Route exact path="/chart" component={Chart} />
    <Route exact path="/checkbox" component={CheckBox} />
    <Route exact path="/checkboxgroup" component={CheckBoxGroup} />
    <Route exact path="/clock" component={Clock} />
    <Route exact path="/collapsible" component={Collapsible} />
    <Route exact path="/color" component={Color} />
    <Route exact path="/data" component={Data} />
    <Route exact path="/datachart" component={DataChart} />
    <Route exact path="/datafilter" component={DataFilter} />
    <Route exact path="/datafilters" component={DataFilters} />
    <Route exact path="/datasearch" component={DataSearch} />
    <Route exact path="/datasort" component={DataSort} />
    <Route exact path="/datasummary" component={DataSummary} />
    <Route exact path="/datatable" component={DataTable} />
    <Route exact path="/datatablecolumns" component={DataTableColumns} />
    <Route exact path="/dataview" component={DataView} />
    <Route exact path="/dateinput" component={DateInput} />
    <Route exact path="/diagram" component={Diagram} />
    <Route exact path="/distribution" component={Distribution} />
    <Route exact path="/drop" component={Drop} />
    <Route exact path="/dropbutton" component={DropButton} />
    <Route exact path="/fileinput" component={FileInput} />
    <Route exact path="/footer" component={Footer} />
    <Route exact path="/form" component={Form} />
    <Route exact path="/formfield" component={FormField} />
    <Route exact path="/grid" component={Grid} />
    <Route exact path="/grommet" component={Grommet} />
    <Route exact path="/header" component={Header} />
    <Route exact path="/heading" component={Heading} />
    <Route exact path="/image" component={Image} />
    <Route exact path="/infinitescroll" component={InfiniteScroll} />
    <Route exact path="/keyboard" component={Keyboard} />
    <Route exact path="/layer" component={Layer} />
    <Route exact path="/list" component={List} />
    <Route exact path="/main" component={Main} />
    <Route exact path="/markdown" component={Markdown} />
    <Route exact path="/maskedinput" component={MaskedInput} />
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/meter" component={Meter} />
    <Route exact path="/namevaluelist" component={NameValueList} />
    <Route exact path="/nav" component={Nav} />
    <Route exact path="/notification" component={Notification} />
    <Route exact path="/page" component={Page} />
    <Route exact path="/pageheader" component={PageHeader} />
    <Route exact path="/pagination" component={Pagination} />
    <Route exact path="/paragraph" component={Paragraph} />
    <Route exact path="/radiobutton" component={RadioButton} />
    <Route exact path="/radiobuttongroup" component={RadioButtonGroup} />
    <Route exact path="/rangeinput" component={RangeInput} />
    <Route exact path="/rangeselector" component={RangeSelector} />
    <Route exact path="/responsivecontext" component={ResponsiveContext} />
    <Route exact path="/select" component={Select} />
    <Route exact path="/selectmultiple" component={SelectMultiple} />
    <Route exact path="/sidebar" component={Sidebar} />
    <Route exact path="/skeleton" component={Skeleton} />
    <Route exact path="/skiplinks" component={SkipLinks} />
    <Route exact path="/spinner" component={Spinner} />
    <Route exact path="/stack" component={Stack} />
    <Route exact path="/starrating" component={StarRatingPage} />
    <Route exact path="/table" component={Table} />
    <Route exact path="/tabs" component={Tabs} />
    <Route exact path="/tag" component={Tag} />
    <Route exact path="/text" component={Text} />
    <Route exact path="/textarea" component={TextArea} />
    <Route exact path="/textinput" component={TextInput} />
    <Route exact path="/themecontext" component={ThemeContext} />
    <Route exact path="/thumbsrating" component={ThumbsRatingPage} />
    <Route exact path="/tip" component={Tip} />
    <Route exact path="/video" component={Video} />
    <Route exact path="/worldmap" component={WorldMap} />

    <Route exact path="/browsers" component={Browsers} />
    <Route exact path="/functions" component={Functions} />
    <Route exact path="/starter" component={GettingStarted} />
    <Route exact path="/globaltheme" component={GlobalTheme} />
    <Route exact path="/resources" component={Resources} />
    <Route exact path="/stablebranch" component={StableBranch} />

    <Route exact path="/grommet-icons" redirect="//icons.grommet.io" />
    <Route exact path="/grommet-icons/" redirect="//icons.grommet.io" />
  </Routes>
);

export default Content;
