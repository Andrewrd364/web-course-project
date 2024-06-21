import { ICategory } from "../models/ICategory";
import { IDish } from "../models/IDish";

export const categories: ICategory[] = [
    { id: "1", name: "Закуски" },
    { id: "2", name: "Десерты" }
];

export const dishes: IDish[] = [
    {
        id: "1",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Салат Цезарь",
        categoryId: "1",
        description: "Классический салат с курицей, пармезаном и соусом Цезарь.",
        price: 300,
        weightInGrams: 200,
        nutritionalValue: {
            protein: 15,
            fats: 20,
            carbohydrates: 10
        }
    },
    {
        id: "2",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Брускетта с помидорами",
        categoryId: "1",
        description: "Хрустящий хлеб с томатами и базиликом.",
        price: 150,
        weightInGrams: 100,
        nutritionalValue: {
            protein: 5,
            fats: 10,
            carbohydrates: 15
        }
    },
    {
        id: "3",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Куриные крылышки",
        categoryId: "1",
        description: "Пикантные куриные крылышки с соусом BBQ.",
        price: 250,
        weightInGrams: 300,
        nutritionalValue: {
            protein: 25,
            fats: 20,
            carbohydrates: 5
        }
    },
    {
        id: "4",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Овощная нарезка",
        categoryId: "1",
        description: "Свежие овощи с зеленью и оливковым маслом.",
        price: 200,
        weightInGrams: 250,
        nutritionalValue: {
            protein: 2,
            fats: 10,
            carbohydrates: 15
        }
    },
    {
        id: "5",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Сырная тарелка",
        categoryId: "1",
        description: "Ассорти из разных сортов сыра.",
        price: 400,
        weightInGrams: 150,
        nutritionalValue: {
            protein: 25,
            fats: 30,
            carbohydrates: 5
        }
    },
    {
        id: "6",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Креветки в кляре",
        categoryId: "1",
        description: "Хрустящие креветки в кляре с соусом.",
        price: 350,
        weightInGrams: 180,
        nutritionalValue: {
            protein: 20,
            fats: 15,
            carbohydrates: 20
        }
    },
    {
        id: "7",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Фалафель",
        categoryId: "1",
        description: "Жареные шарики из нута с соусом тахини.",
        price: 200,
        weightInGrams: 150,
        nutritionalValue: {
            protein: 10,
            fats: 10,
            carbohydrates: 20
        }
    },
    {
        id: "8",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Мясная тарелка",
        categoryId: "1",
        description: "Ассорти из разных видов мяса с соусами.",
        price: 450,
        weightInGrams: 300,
        nutritionalValue: {
            protein: 30,
            fats: 25,
            carbohydrates: 10
        }
    },
    {
        id: "9",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Пицца Маргарита",
        categoryId: "1",
        description: "Классическая итальянская пицца с томатами и моцареллой.",
        price: 500,
        weightInGrams: 400,
        nutritionalValue: {
            protein: 20,
            fats: 15,
            carbohydrates: 50
        }
    },
    {
        id: "10",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Паста Карбонара",
        categoryId: "1",
        description: "Паста с беконом, яйцом и сыром.",
        price: 400,
        weightInGrams: 350,
        nutritionalValue: {
            protein: 15,
            fats: 20,
            carbohydrates: 40
        }
    },
    {
        id: "11",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Пицца Пепперони",
        categoryId: "1",
        description: "Пицца с острой колбасой пепперони и сыром.",
        price: 550,
        weightInGrams: 400,
        nutritionalValue: {
            protein: 22,
            fats: 25,
            carbohydrates: 50
        }
    },
    {
        id: "12",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Салат Цезарь",
        categoryId: "1",
        description: "Классический салат Цезарь с курицей, салатом ромэн и пармезаном.",
        price: 350,
        weightInGrams: 250,
        nutritionalValue: {
            protein: 20,
            fats: 15,
            carbohydrates: 15
        }
    },
    {
        id: "13",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Бургер",
        categoryId: "1",
        description: "Классический бургер с говяжьей котлетой, сыром и овощами.",
        price: 450,
        weightInGrams: 300,
        nutritionalValue: {
            protein: 25,
            fats: 30,
            carbohydrates: 40
        }
    },
    {
        id: "14",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Шашлык",
        categoryId: "1",
        description: "Маринованный шашлык из свинины, жаренный на углях.",
        price: 500,
        weightInGrams: 350,
        nutritionalValue: {
            protein: 30,
            fats: 25,
            carbohydrates: 5
        }
    },
    {
        id: "15",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Плов",
        categoryId: "1",
        description: "Традиционный узбекский плов с бараниной и морковью.",
        price: 400,
        weightInGrams: 400,
        nutritionalValue: {
            protein: 20,
            fats: 15,
            carbohydrates: 50
        }
    },
    {
        id: "16",
        imageUrl: "https://s3-alpha-sig.figma.com/img/8550/5f1a/978766cd3213d1c042a5226541bd6a85?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzB1m9fPMBss712pbpAyqZg4s-YdvsLEqhHgZNtci1shstkCSZOPo1YDvH8w1M~WvxXrbh901kr1FHfUcR7Z6WzWU1ZKR4PKojc1Hen3EHJBGzeaGj6mMdbrYKRbKqSPzumGns2CFs5f-zNNdyB-n36DJGzs1Bd~SKCnagSbA-49UKyUTW8h2TbYBeICPiNHR2gQqSO9oppF6yTbBgrqhUqGXgwiyudZwJ1qaUAeQDzTfnZsZHvKM1VrgYqW9B1J2ORPzKGW-The36R3hRRtFWtXqCHqlQh16kpK3tysoKBbwLa-jMfRNqU61CjA3L7YiOSFErX~7PUExUZ7w3Zy4w__",
        name: "Ролл Калифорния",
        categoryId: "1",
        description: "Ролл с крабовыми палочками, авокадо и икрой тобико.",
        price: 300,
        weightInGrams: 200,
        nutritionalValue: {
            protein: 12,
            fats: 10,
            carbohydrates: 25
        }
    }
];
