// city controller
app.controller('CityController', function CityController($scope) {

	// cities array
	$scope.cities = [
		{
			name: 'Ciudad de México',
			branchs: [
				{
					name: 'Casa matriz',
					tel: '53284791'
				},
				{
					name: 'Suc. Arboledas',
					tel: '55203418'
				},
				{
					name: 'Coyoacán',
					tel: '56872341'
				}
			]
		},
		{
			name: 'Guadalajara, Jalisco',
			branchs: [
				{
					name: 'Centro',
					tel: '28437654'
				},
				{
					name: 'Boulevard Norte',
					tel: '28470092'
				}
			]
		},
		{
			name: 'Mérida, Yucatán',
			branchs: [
				{
					name: 'Paseo Montejo',
					tel: '1293412'
				}
			]
		}
	];
});