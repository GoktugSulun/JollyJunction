import FileTypeEnums from '../../Pages/Dashboard/Components/Enums/FileTypeEnums';

const FileSubTypes = {
  mp4: FileTypeEnums.VIDEO,
  png: FileTypeEnums.IMAGE,
  jpg: FileTypeEnums.IMAGE,
  jpeg: FileTypeEnums.IMAGE,
};

export const getFileType = (subType) => {
  return FileSubTypes[subType];
};