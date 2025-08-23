const query = `
    CREATE TYPE role_enum AS ENUM ('customer', 'artisan');
    CREATE TYPE payment_status AS ENUM ('unpaid', 'paid', 'failed');
    CREATE TYPE order_status AS ENUM ('pending', 'priced', 'advance_paid', 'in_progress', 'ready_for_pickup', 'completed', 'rejected');

    CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        contact VARCHAR(20),
        role role_enum NOT NULL DEFAULT 'customer',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXSITS idols (
        idol_id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
        );

    CREATE TABLE IF NOT EXISTS custom_orders (
        custom_order_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
        artisan_id INT REFERENCES users(user_id) ON DELETE SET NULL,
        description TEXT,
        image_url TEXT,
        size VARCHAR(50),
        material VARCHAR(100),
        price NUMERIC(10,2),
        delivery_by DATE,
        advance_amount NUMERIC(10,2),
        advance_paid BOOLEAN DEFAULT false,
        payment_id TEXT,
        payment_status payment_status DEFAULT 'unpaid',
        order_status order_status DEFAULT 'pending',
        created_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS orders (
        order_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
        price NUMERIC(10,2) NOT NULL,
        delivery_by DATE NOT NULL,
        advance_amount NUMERIC(10,2),
        advance_paid BOOLEAN DEFAULT FALSE,
        payment_id VARCHAR(100),
        payment_status payment_status DEFAULT 'unpaid',
        order_status order_status DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;
