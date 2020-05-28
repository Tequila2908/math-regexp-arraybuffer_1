import Daemon from '../Daemon';
import Magician from '../Magician';

test('Magician full attack', () => {
  const magician = new Magician('test');
  magician.distance = 1;
  expect(magician.attack).toBe(100);
});

test('Magician stoned attack', () => {
  const magician = new Magician('test');
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Magician distance attack', () => {
  const magician = new Magician('test');
  magician.distance = 5;
  expect(magician.attack).toBe(60);
});

test('Daemon full attack', () => {
  const daemon = new Daemon('test');
  daemon.distance = 1;
  expect(daemon.attack).toBe(100);
});

test('Daemon stoned attack', () => {
  const daemon = new Daemon('test');
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});

test('Daemon distance attack', () => {
  const daemon = new Daemon('test');
  daemon.distance = 5;
  expect(daemon.attack).toBe(60);
});
