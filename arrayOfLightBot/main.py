import random
from typing import Text
from telegram.ext import Updater,Filters , InlineQueryHandler, CommandHandler, MessageHandler
import telegram
import requests
import re
import time
from telegram.ext.filters import MessageFilter

token = "1376164311:AAEQ51LqY00cdiopTZlRU2qqHyS9sfbWG6M"
coursesKeyboard = [
    ["JA Building a Financially Capable Generation"],
    ["JA Career Dimensions 4.0"],
    ["JA Company Programme"],
    ["JA Leader Dialogue"],
    ["JA Finance for Future"],
    ["JA Innovation Camp"],
    ["JA International Trade Challenge Workshop"],
    ["JA Job Shadowing"],
    ["JA Personal Spending 101"],
    ["JA Planning with Purpose"]
]

photoLink = ["https://www.jahk.org/wp-content/uploads/2016/01/Untitled-5-01-150x150.png",
"https://www.jahk.org/wp-content/uploads/2016/01/SC-150x150.png",
"https://www.jahk.org/wp-content/uploads/2016/01/ITC-150x150.png",
"http://www.jahk.org/wp-content/uploads/2015/11/IMG_6011-156x117.jpg",
"http://www.jahk.org/wp-content/uploads/2015/11/DGY-1-156x117.jpg",
"http://www.jahk.org/wp-content/uploads/2019/10/IMG_3079-156x117.jpg",
"http://www.jahk.org/wp-content/uploads/2015/11/BE-156x88.jpg",
"https://i.ytimg.com/vi/CWfY6ypbuGw/sddefault.jpg",
"http://www.jahk.org/wp-content/uploads/2019/12/1-4-1024x768.jpg",
"http://www.jahk.org/wp-content/uploads/2019/12/2-1-1024x768.jpg",
"http://www.jahk.org/wp-content/uploads/2015/11/JAN02891-1024x683.jpg"]

def courses(update, context):
    chat_id = update.message.chat_id
    context.bot.send_message(chat_id=chat_id, text="All Courses", reply_markup=telegram.ReplyKeyboardMarkup(coursesKeyboard))

def get_url():
    url = random.choice(photoLink)
    return url

def promotion(update, context):
    url = get_url()
    chat_id = update.message.chat_id
    context.bot.send_photo(chat_id=chat_id, photo=url)

def reply(update, context):
    user_input = update.message.text
    chat_id = update.message.chat_id
    for index, reply in enumerate(coursesKeyboard):
        if user_input == reply[0]:
            f = open("./reply/"+str(index+1)+".txt")
            context.bot.send_message(chat_id=chat_id, text=f.read())

def start(update, context):
    chat_id = update.message.chat_id
    f = open("./start.txt")
    context.bot.send_message(chat_id=chat_id, text=f.read());

def end(update, context):
    chat_id = update.message.chat_id
    context.bot.send_message(chat_id=chat_id,text='Thank you. See you later.')
    return CommandHandler.END


def main():
    updater = Updater(token)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler('start', start));
    dp.add_handler(CommandHandler('promotion',promotion))
    dp.add_handler(CommandHandler('showCourses',courses))
    dp.add_handler(MessageHandler(Filters.text, reply))
    dp.add_handler(CommandHandler('end', end))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()