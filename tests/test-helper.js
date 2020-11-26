import Application from 'ember-default-query-param/app';
import config from 'ember-default-query-param/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
