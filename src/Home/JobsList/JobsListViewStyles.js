import {StyleSheet} from 'react-native';

const JobsListViewStyles = StyleSheet.create({
  Container: {padding: 32},
  HeadingStyle: {paddingTop: 16, paddingBottom: 16},
  ListItemContainer: {
    flexDirection: 'row',
    paddingBottom: 16,
  },
  ListItemIdContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: '#9B9B9B',
    marginRight: 4,
  },
  ListItemTextView: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    width: '90%',
  },
  ListItemText: {flex: 1, fontSize: 18, paddingRight: 20},
});

export default JobsListViewStyles;
