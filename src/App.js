import React, { Component, Fragment } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import { hot } from 'react-hot-loader'
import classnames from 'classnames'

import Home from './containers/Home'
import Leads from './containers/Leads'
import CallDashboard from './containers/CallDashboard'
import NoRouteMatch from './containers/404'
import Navbar from './components/navbar/Navbar'
import Settings from './containers/Settings'
import Widgets from './containers/Widgets'
import Notification from './common/Notification'
import Register from './containers/Register'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import GetStartedLog from './containers/GetStarted'

import 'rc-color-picker/assets/index.css'
import 'react-datepicker/dist/react-datepicker.css'
import './stylesheets/main.scss'

import QuickSetup from './containers/QuickSetup'

class App extends Component {
  state = {
    isNotification: false,
    activeTab: 'Account',
    activeComponent: 'MySettings'
  }

  handleActive = (activeTabData, activeComponentData) => {
    this.setState({
      activeTab: activeTabData,
      activeComponent: activeComponentData
    })
  }

  onclickCloseNotification = () => {
    let { isNotification } = this.state

    isNotification = !isNotification
    this.setState({ isNotification })
  }

  render() {
    const { isNotification } = this.state

    return (
      <HashRouter basename="/">
        <ScrollToTop>
          <div className="App">
            {isNotification ? (
              <Notification actionEvent={this.onclickCloseNotification} />
            ) : null}
            <div
              className={classnames('main-container', {
                'notif-active': isNotification
              })}
            >
              <Switch>
                <Route
                  exact
                  path={[
                    '/settings',
                    '/home',
                    '/leads',
                    '/widgets',
                    '/calldashboard',
                    '/callLog'
                  ]}
                  render={() => {
                    return (
                      <Fragment>
                        <Navbar handleActive={this.handleActive} />
                        <Route path="/home" component={Home} />
                        <Route path="/leads" component={Leads} />

                        <Route
                          path="/settings"
                          component={() => (
                            <Settings
                              activeComponent={this.state.activeComponent}
                              activeTab={this.state.activeTab}
                            />
                          )}
                        />
                        <Route path="/widgets" component={Widgets} />
                        <Route
                          path="/calldashboard"
                          component={CallDashboard}
                        />
                      </Fragment>
                    )
                  }}
                />
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/getstarted" component={GetStartedLog} />
                <Route path="/quicksetup" component={QuickSetup} />
                <Route path="/register" component={Register} />
                <Route component={NoRouteMatch} />
              </Switch>
            </div>
          </div>
        </ScrollToTop>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
