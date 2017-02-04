import bandInfoDir from './bandInfo.directive';
import bandListService from './bandList.service';

export default app => {
  bandInfoDir(app);
  bandListService(app);
};