import {
    initialize,
    requestPermission,
    readRecords,
} from 'react-native-health-connect';
  

export const readSampleData = async () => {
    // initialize the client
    const isInitialized = await initialize();

    console.log(isInitialized);
  
    // request permissions
    const grantedPermissions = await requestPermission([
      { accessType: 'read', recordType: 'ActiveCaloriesBurned' },
      { accessType: 'read', recordType: 'Steps' },
      { accessType: 'read', recordType: 'HeartRate' },
      { accessType: 'read', recordType: 'Distance' },
      { accessType: 'read', recordType: 'SleepSession' },
    ]);

    console.log(grantedPermissions);
  
    // check if granted
    const result = await readRecords('Steps', {
        timeRangeFilter: {
            operator: 'between',
            startTime: '2024-05-01T12:00:00.405Z',
            endTime: '2024-05-12T23:53:15.405Z',
        },
    });
    console.log(result);
};