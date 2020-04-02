/**
 * @author Hoang Tran / https://github.com/HoangTran0410
 * @create date 2020-03-30 00:32:53
 * @modify date 2020-03-30 00:32:53
 * @desc [description]
 */
import { UIText, UIRow } from './libs/ui.js';

const UserList = function(app) {
  const container = new UIRow().addClass('header');
  container.add(new UIText('User List'));

  return container;
};

export { UserList };
