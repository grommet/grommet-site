import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { structure, nameToPath } from '../../structure';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Section from './Section';
import Color from './Color';

import {
  AccordionItem,
  AnchorItem,
  AvatarItem,
  AnnounceContextItem,
  BoxItem,
  ButtonItem,
  CalendarItem,
  CardItem,
  CarouselItem,
  ChartItem,
  CheckBoxItem,
  CheckBoxGroupItem,
  ClockItem,
  CollapsibleItem,
  DataChartItem,
  DataTableItem,
  DateInputItem,
  DiagramItem,
  DistributionItem,
  DropItem,
  DropButtonItem,
  FooterItem,
  FormItem,
  FormFieldItem,
  GridItem,
  GrommetItem,
  HeaderItem,
  HeadingItem,
  ImageItem,
  InfiniteScrollItem,
  KeyboardItem,
  LayerItem,
  ListItem,
  MainItem,
  MarkdownItem,
  MaskedInputItem,
  MenuItem,
  MeterItem,
  NavItem,
  PaginationItem,
  ParagraphItem,
  RadioButtonItem,
  RadioButtonGroupItem,
  RangeInputItem,
  RangeSelectorItem,
  ResponsiveContextItem,
  SelectItem,
  SidebarItem,
  SkipLinksItem,
  StackItem,
  TableItem,
  TabsItem,
  TextItem,
  TextAreaItem,
  TextInputItem,
  ThemeContextItem,
  TipItem,
  VideoItem,
  WorldMapItem,
} from './items';

const Items = {
  Accordion: AccordionItem,
  Anchor: AnchorItem,
  Avatar: AvatarItem,
  AnnounceContext: AnnounceContextItem,
  Box: BoxItem,
  Button: ButtonItem,
  Calendar: CalendarItem,
  Card: CardItem,
  Carousel: CarouselItem,
  Chart: ChartItem,
  CheckBox: CheckBoxItem,
  CheckBoxGroup: CheckBoxGroupItem,
  Clock: ClockItem,
  Collapsible: CollapsibleItem,
  DataChart: DataChartItem,
  DataTable: DataTableItem,
  DateInput: DateInputItem,
  Diagram: DiagramItem,
  Distribution: DistributionItem,
  Drop: DropItem,
  DropButton: DropButtonItem,
  Footer: FooterItem,
  Form: FormItem,
  FormField: FormFieldItem,
  Grid: GridItem,
  Grommet: GrommetItem,
  Header: HeaderItem,
  Heading: HeadingItem,
  Image: ImageItem,
  InfiniteScroll: InfiniteScrollItem,
  Keyboard: KeyboardItem,
  Layer: LayerItem,
  List: ListItem,
  Main: MainItem,
  Markdown: MarkdownItem,
  MaskedInput: MaskedInputItem,
  Menu: MenuItem,
  Meter: MeterItem,
  Nav: NavItem,
  Pagination: PaginationItem,
  Paragraph: ParagraphItem,
  RadioButton: RadioButtonItem,
  RadioButtonGroup: RadioButtonGroupItem,
  RangeInput: RangeInputItem,
  RangeSelector: RangeSelectorItem,
  ResponsiveContext: ResponsiveContextItem,
  Select: SelectItem,
  Sidebar: SidebarItem,
  SkipLinks: SkipLinksItem,
  Stack: StackItem,
  Table: TableItem,
  Tabs: TabsItem,
  Text: TextItem,
  TextArea: TextAreaItem,
  TextInput: TextInputItem,
  ThemeContext: ThemeContextItem,
  Tip: TipItem,
  Video: VideoItem,
  WorldMap: WorldMapItem,
};

export default class Components extends Component {
  sectionRefs = {};

  constructor() {
    super();
    structure.sections.forEach(({ name }) => {
      this.sectionRefs[name] = React.createRef();
    });
  }

  componentDidMount() {
    this.scrollToSection();
  }

  componentDidUpdate() {
    this.scrollToSection();
  }

  scrollToSection = () => {
    const name = window.location.hash.split('#')[1];
    if (name && this.sectionRefs[name]) {
      this.sectionRefs[name].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  render() {
    const desc =
      'These are the building blocks of the grommet library, master them, and become a l33t.';
    return (
      <Page>
        <Helmet>
          <title>Components</title>
          <meta name="description" content={desc} />
        </Helmet>
        <Header label="Components" summary={desc} />

        {structure.sections.map(({ name, components }, index) => (
          <Section
            ref={this.sectionRefs[name]}
            key={name}
            name={name}
            index={index}
          >
            {name === 'Color' ? (
              <Color index={index} />
            ) : (
              components.map(component => {
                const Item = Items[component];
                return (
                  <Item
                    key={component}
                    name={component}
                    path={nameToPath(component)}
                  />
                );
              })
            )}
          </Section>
        ))}
      </Page>
    );
  }
}
