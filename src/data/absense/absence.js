const absences = [
    {
        date: "2025-01-01",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'retard', minutesLate: 15 },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'authorized_output', entryTime: "09:15", exitTime: "17:45" },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-02",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'absent' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'retard', minutesLate: 10 },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'authorized_output', entryTime: "09:05", exitTime: "17:30" },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-03",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-04",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-05",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-06",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-07",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-08",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-09",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-10",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-11",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-12",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-13",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-14",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'absent' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-15",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'absent' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-16",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-17",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-18",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date:"2025-01-19",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-20",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-21",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-22",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-23",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 3, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 3, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 3, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 3, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 3, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 3, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 3, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 3, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 3, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 3, status: 'present' }
        ]
    },
    {
        date: "2025-01-24",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-25",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'congis' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-26",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 2, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 2, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 2, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 2, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 2, status: 'congis' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 2, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 2, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 2, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 2, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 2, status: 'present' }
        ]
    },
    {
        date: "2025-01-27",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'congis' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-28",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'congis' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-29",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'congis' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-30",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'congis' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    },
    {
        date: "2025-01-31",
        employers: [
            { id: 1, name: "Ali Benchekroun", responsibleUserId: 1, status: 'present' },
            { id: 2, name: "Sara El Amrani", responsibleUserId: 1, status: 'present' },
            { id: 3, name: "Mehdi Boukhriss", responsibleUserId: 1, status: 'present' },
            { id: 4, name: "Fatima Zahra", responsibleUserId: 1, status: 'present' },
            { id: 5, name: "Youssef Kadiri", responsibleUserId: 1, status: 'present' },
            { id: 6, name: "Imane Chraibi", responsibleUserId: 1, status: 'present' },
            { id: 7, name: "Mohamed El Idrissi", responsibleUserId: 1, status: 'present' },
            { id: 8, name: "Layla Bouziane", responsibleUserId: 1, status: 'present' },
            { id: 9, name: "Omar Rachid", responsibleUserId: 1, status: 'present' },
            { id: 10, name: "Hanae Mounir", responsibleUserId: 1, status: 'present' }
        ]
    }
    
];

export default absences;