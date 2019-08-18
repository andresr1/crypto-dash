import React from 'react';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';

export default function() {
    return (
        <Page name="settings">
            <WelcomeMessage />
            <CoinGrid topSection />
            <ConfirmButton />
            <CoinGrid />
        </Page>
    )
}