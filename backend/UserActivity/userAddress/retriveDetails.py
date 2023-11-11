import pymysql


def get_user_rate_details(connection_details, email):
    try:
        # Use double asterisks to unpack the dictionary
        connection = pymysql.connect(**connection_details)
        cursor = connection.cursor()

        query = "SELECT id, name FROM users_details WHERE email = %s"
        cursor.execute(query, (email,))
        result = cursor.fetchone()

        if result:
            user_id, user_name = result
        else:
            user_id, user_name = None, None

        connection.close()
        return user_id, user_name

    except Exception as e:
        print("Error:", e)
        return None
