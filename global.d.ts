import ar from './src/messages/ar.json';

type Messages = typeof ar;

declare global {
  interface IntlMessages extends Messages {}
}
