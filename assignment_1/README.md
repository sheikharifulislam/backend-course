## API Reference

#### Base URL

```http
  http://localhost:8000/
```

#### Generate Random Number

```http
 GET /generate
 Example: http://localhost:8000/generate?min=10&max=15
```

| Query Param | Type     | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| `min`       | `number` | **Required**. Minimum range for random number |
| `max`       | `number` | **Required**. Maximum range for random number |
