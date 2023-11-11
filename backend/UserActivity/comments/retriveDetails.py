import pymysql


def get_user_comment_details(connection_details, email):
    try:
        # Use double asterisks to unpack the dictionary
        connection = pymysql.connect(**connection_details)
        cursor = connection.cursor()

        query = "SELECT id FROM users_details WHERE email = %s"
        cursor.execute(query, (email,))
        result = cursor.fetchone()
        

        if result:
            user_id = result[0]
        else:
            user_id = None

        connection.close()
        return user_id

    except Exception as e:
        print("Error:", e)
        return None
