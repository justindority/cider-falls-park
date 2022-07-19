const database = {
    destinations:
    [
        {
            id: 1,
            name: 'Chamfort River',
            image: 'https://m.media-amazon.com/images/I/5163FXPgcLL.jpg'
        },
        {
            id: 2,
            name: 'Lost Wolf Hiking Trail',
            image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1055540/ss_f2123fea859e299736a3e99d130238c784d53e75.1920x1080.jpg?t=1626188953'
        },
        {
            id: 3,
            name: 'Lodge',
            features: 'Hotel, Restaurant',
            image: 'https://luigismansion.nintendo.com/assets/img/home/last-resort.jpg'
        },
        {
            id: 4,
            name: 'Gander River',
            image: 'https://www.zeldadungeon.net/wiki/images/thumb/9/97/Zorariveroot.jpg/400px-Zorariveroot.jpg'
        },
        {
            id: 5,
            name: 'Campgrounds',
            features: `Office Park, Childrens' Play Area`,
            image: 'https://images.gnwcdn.com/2015/usgamer/ddpreviewheader.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/how-darkest-dungeon-subverts-the-rpg-genre.jpg'
        },
        {
            id: 6,
            name: 'Pine Bluffs Trails',
            features: 'Food Vendors',
            image: 'https://cdn.mos.cms.futurecdn.net/enuSPgFCbUfNN7mGdj27i7.jpg'
        },
    ],
    guests:
    [
        {
            id: 1,
            fName: 'Sleve',
            lName: 'McDichael',
            location: 1
        },
        {
            id: 2,
            fName: 'Onson',
            lName: 'Sweemey',
            location: 4
        },
        {
            id: 3,
            fName: 'Raul',
            lName: 'Chamgerlain',
            location: 5
        },
        {
            id: 4,
            fName: 'Bobson',
            lName: 'Dugnutt',
            location: 6
        },
        {
            id: 5,
            fName: 'Willie',
            lName: 'Dustice',
            location: 4
        },
        {
            id: 6,
            fName: 'Mike',
            lName: 'Truk',
            location: 1
        },
        {
            id: 7,
            fName: 'Dwigt',
            lName: 'Rortugal',
            location: 2
        },
        {
            id: 8,
            fName: 'Karl',
            lName: 'Dandleton',
            location: 2
        },
        {
            id: 9,
            fName: 'Mike',
            lName: 'Sernandez',
            location: 4
        },
        {
            id: 10,
            fName: 'Todd',
            lName: 'Bonzalez',
            location: 3
        }
    ],
    activities:
    [
        {
            id: 1,
            name: 'Rafting'
        },
        {
            id: 2,
            name: 'Canoeing'
        },
        {
            id: 3,
            name: 'Fishing'
        },
        {
            id: 4,
            name: 'Hiking'
        },
        {
            id: 5,
            name: 'Picnicking'
        },
        {
            id: 6,
            name: 'Rock Climbing'
        },
        {
            id: 7,
            name: 'Lodging'
        },
        {
            id: 8,
            name: 'Parking'
        },
        {
            id: 9,
            name: 'Information'
        },
        {
            id: 10,
            name: 'Zip Lines'
        }
    ],
    destinationActivites:
    [
        {
            destinationId: 1,
            activityId: 1
        },
        {
            destinationId: 1,
            activityId: 2
        },
        {
            destinationId: 1,
            activityId: 3
        },
        {
            destinationId: 2,
            activityId: 4
        },
        {
            destinationId: 2,
            activityId: 5
        },
        {
            destinationId: 2,
            activityId: 6
        },
        {
            destinationId: 3,
            activityId: 7
        },
        {
            destinationId: 3,
            activityId: 8
        },
        {
            destinationId: 3,
            activityId: 9
        },
        {
            destinationId: 3,
            activityId: 5
        },
        {
            destinationId: 4,
            activityId: 3
        },
        {
            destinationId: 4,
            activityId: 4
        },
        {
            destinationId: 5,
            activityId: 9
        },
        {
            destinationId: 5,
            activityId: 7
        },
        {
            destinationId: 5,
            activityId: 8
        },
        {
            destinationId: 6,
            activityId: 4
        },
        {
            destinationId: 6,
            activityId: 5
        },
        {
            destinationId: 6,
            activityId: 10
        }
    ]
}

export const getDestinations = () => {
    return database.destinations.map((destination) => ({ ...destination}));
    };

export const getGuests = () => {
    return database.guests.map((guest) => ({ ...guest}));
    };

export const getActivities = () => {
    return database.activities.map((activity) => ({ ...activity}));
    };

export const getDestinationActivities = () => {
    return database.destinationActivites.map((destinationActivity) => ({ ...destinationActivity}));
    };