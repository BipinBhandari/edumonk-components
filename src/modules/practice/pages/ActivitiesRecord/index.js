import React from 'react';
import { Button, Avatar, Progress } from 'antd';
import styles from './index.scss';
import Layout from '../../../common/organisms/Layout';
import Header from '../../../common/molecules/Header';
import PageTitle from '../../../common/molecules/PageTitle';
import InputBox from '../../../common/atoms/InputBox';
import CardHeading from '../../../common/atoms/CardHeading';
import ChatBox from '../../../common/molecules/ChatBox';
import P from '../../../common/atoms/P';

class ActivitiesRecord extends React.Component {
  state = {
    text: '',
    search: '',
    obj: ['apple']
  };
  updateText = text => {
    this.setState({ text });
  };
  searchText = search => {
    this.setState({ search });
  };
  render() {
    const breadcrumbs = [
      {
        label: 'Dashboard'
      },
      {
        to: '/institutions',
        label: 'ActivitiesRecord'
      }
    ];
    return (
      <Layout breadcrumbs={breadcrumbs}>
        <div className={styles.one}>
          <Header />
          <PageTitle text="Activities" showIcon="true" />
          <div className={styles.mainBody}>
            <div className={styles.studentStatus}>
              <div className={styles.avatar}>
                <Avatar icon="user" />
              </div>
              <div className={styles.cardText}>
                <CardHeading className={styles.name}>Kabir Pokharel</CardHeading>
                <P standard={styles.standard}>Kindergarten</P>
              </div>
              <div className={styles.progress}>
                <Progress type="dashboard" width={40} percent={75} />
              </div>
            </div>
            <div className={styles.studentCard}>
              <ChatBox cardWidth={styles.cardWidth} message="Did sirish took his nap?" YesNoButton={true} />
              <div>
                <button>{this.state.obj}</button>
              </div>
            </div>
            <div className={styles.chatInput}>
              <div className={styles.inputBox}>
                <InputBox value={this.state.text} onChange={this.updateText} />
              </div>
              <div className={styles.button}>
                <Button type="primary" shape="circle" icon="play-circle" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ActivitiesRecord;