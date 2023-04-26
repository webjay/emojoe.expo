import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

type Props = {
  search: (query: string) => void;
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

function Search({ search }: Props) {
  const [query, setQuery] = useState('');
  const onChangeText = useCallback(
    (text: string) => {
      setQuery(text);
      search(text);
    },
    [search],
  );
  return (
    <View style={styles.container}>
      <Searchbar value={query} onChangeText={onChangeText} />
    </View>
  );
}

export default Search;
