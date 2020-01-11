import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  Search
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Github Profile</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Look up your Github username
          </h1>
          <Search
            className="some-class"
            closeButtonLabelText="Clear search input"
            defaultValue=""
            id="search-1"
            labelText="Search"
            name=""
            onChange={function noRefCheck(){}}
            placeHolderText="Search"
            size="xl"
            type="text"
          />
          </div>
        </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
        </div>
      </div>
    </div>
  );
};

export default LandingPage;